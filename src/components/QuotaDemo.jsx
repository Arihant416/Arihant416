import { useState } from 'react';

// An in-browser illustration of the quota-meter decision path. The real engine runs
// this inside one atomic Redis Lua script; here it is plain React state.
const LIMIT = 3;
const BATCH = 4;
// State keeps only the last key, its decision and its cost (requests it asked for).
// `seq` numbers log rows so React keys stay unique and updaters stay pure.
const initial = { usage: 0, n: 0, seq: 0, last: null, path: '', log: [], msg: '' };
const keyFor = (n) => `req-${String(n).padStart(2, '0')}`;

function decide(state, cost) {
  const n = state.n + 1;
  const key = keyFor(n);
  // All-or-nothing: the whole request (or batch) fits, or nothing is deducted.
  const allow = state.usage + cost <= LIMIT;
  const usage = allow ? state.usage + cost : state.usage;
  const decision = allow ? 'ALLOW' : 'DENY';
  const kind = cost > 1 ? `batch ×${cost}` : 'new';
  const note = allow
    ? `deducted ${cost} · usage ${usage}/${LIMIT}`
    : `${cost > 1 ? 'all-or-nothing · ' : ''}usage unchanged at ${usage}/${LIMIT}`;
  return {
    ...state,
    n,
    seq: state.seq + 1,
    usage,
    last: { key, decision, cost },
    path: allow ? 'allow' : 'deny',
    msg: '',
    log: [{ id: state.seq + 1, key, kind, result: decision, note, tone: allow ? 'ok' : 'bad' }, ...state.log].slice(0, 4),
  };
}

export default function QuotaDemo({ flow }) {
  const [state, setState] = useState(initial);
  const { usage, path, last } = state;

  const send = () => setState((s) => decide(s, 1));
  const batch = () => setState((s) => decide(s, BATCH));
  const reset = () => setState(initial);
  const retry = () => setState((s) => {
    if (!s.last) return { ...s, path: '', msg: 'Nothing to retry yet. Send a request first.' };
    return {
      ...s,
      path: 'replay',
      msg: '',
      seq: s.seq + 1,
      log: [{
        id: s.seq + 1,
        key: s.last.key,
        kind: 'retry',
        result: `REPLAY ${s.last.decision}`,
        note: `saved decision returned · usage unchanged at ${s.usage}/${LIMIT}`,
        tone: 'neutral',
      }, ...s.log].slice(0, 4),
    };
  });

  const batchTag = last && last.cost > 1 ? ` · batch ×${last.cost}` : '';
  let result;
  let tone = 'idle';
  if (path === 'allow') {
    result = `ALLOW · ${last.key}${batchTag} · deducted ${last.cost} · usage ${usage} / ${LIMIT}`;
    tone = 'ok';
  } else if (path === 'deny') {
    result = `DENY · ${last.key}${batchTag} · ${last.cost > 1 ? 'all-or-nothing · ' : ''}usage unchanged at ${usage} / ${LIMIT}`;
    tone = 'bad';
  } else if (path === 'replay') {
    result = `REPLAY · ${last.key} returned its saved ${last.decision} · nothing deducted`;
    tone = 'neutral';
  } else {
    result = state.msg || `Ready · usage ${usage} / ${LIMIT} · press Send request`;
  }

  // The highlighted path is the response to a control, so it uses the control colour.
  const ran = path === 'allow' || path === 'deny';
  const on = (cond) => (cond ? 'is-on' : '');

  return (
    <div className="demo">
      <div className="demo-top">
        <p className="card-name">Try it · limit {LIMIT}</p>
        <p className="meter">
          <span>usage</span>
          <span className="meter-cells" aria-hidden="true">
            {Array.from({ length: LIMIT }, (_, i) => <i key={i} className={i < usage ? 'is-used' : ''} />)}
          </span>
          <span>{usage} / {LIMIT}</span>
        </p>
      </div>

      <div className="demo-controls">
        <button type="button" className="btn btn-primary btn-sm" onClick={send}>Send request</button>
        <button type="button" className="btn btn-sm" onClick={retry}>Retry same key</button>
        <button type="button" className="btn btn-sm" onClick={batch}>Send batch of {BATCH}</button>
        <button type="button" className="link-button" onClick={reset}>Reset</button>
      </div>

      <figure className="lua-flow" aria-labelledby="lua-flow-title">
        <figcaption id="lua-flow-title" className="kicker">{flow.title}</figcaption>
        <ol className="lua-flow-steps">
          <li className="lua-start" aria-hidden="true" />
          <li className="lua-exit-row">
            <span className={`lua-node lua-node--exit ${on(path === 'replay')}`}>{flow.replay}</span>
          </li>
          <li className="lua-label">no, new key ↓</li>
          <li className={`lua-node ${on(ran)}`}>{flow.load}</li>
          <li className="lua-branches">
            <ul>
              <li className={`lua-node ${on(path === 'allow')}`}>{flow.branches[0]}</li>
              <li className={`lua-node ${on(path === 'deny')}`}>{flow.branches[1]}</li>
            </ul>
          </li>
          <li className={`lua-node lua-node--save ${on(ran)}`}>{flow.save}</li>
        </ol>
      </figure>

      <p className={`demo-result tone-${tone}`} role="status" aria-live="polite">{result}</p>

      {state.log.length > 0 && (
        <ol className="demo-log" aria-label="Last 4 decisions">
          {state.log.map((entry) => (
            <li key={entry.id} className={`tone-${entry.tone}`}>
              <span>{entry.key}</span>
              <span>{entry.kind}</span>
              <b>{entry.result}</b>
              <span className="demo-log-note">{entry.note}</span>
            </li>
          ))}
        </ol>
      )}

      <p className="demo-note">An illustration that runs in your browser. The engine does this inside one atomic Redis Lua script.</p>
    </div>
  );
}
