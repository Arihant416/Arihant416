export const metrics = {
  dailyRequests: {
    display: '5M+',
    value: 5,
    label: 'Daily API requests',
    context: 'across critical KYC and identity suites',
  },
  cumulativeSavings: {
    display: '$700K+',
    value: 700,
    label: 'Cumulative savings',
    context: 'delivered since April 2024',
  },
  vendorRetirementSavings: {
    display: '$230K+',
    value: 230,
    label: 'Vendor-retirement savings',
    context: 'over two years',
  },
  apisDesigned: {
    display: '30+',
    value: 30,
    label: 'APIs designed',
    context: 'from contract through production',
  },
  apisOperated: {
    display: '200+',
    value: 200,
    label: 'APIs operated',
    context: 'across KYC and cross-team integrations',
  },
  apisContainerized: {
    display: '245 / 260',
    value: 245,
    total: 260,
    label: 'APIs containerized',
    context: 'during Python 3.9 to 3.12 modernization',
  },
  internationalApis: {
    display: '20+',
    value: 20,
    label: 'International APIs',
    context: 'delivered across Kenya, UAE, and Indonesia',
  },
  codeReviews: {
    display: '100+',
    value: 100,
    label: 'Code reviews',
    context: 'with mentoring and production triage support',
  },
  p99Latency: {
    display: '8s → 5s',
    before: 8,
    after: 5,
    reduction: 37.5,
    label: 'P99 latency',
    context: 'for re-engineered legacy KYC APIs',
  },
  browserWorkflow: {
    successBefore: 60,
    successAfter: 98,
    latencyBefore: 40,
    latencyAfter: 6,
    label: 'Browser-based document workflow',
  },
  sourceServing: {
    display: '35% → 82%',
    before: 35,
    after: 82,
    multiplier: 3,
    label: 'In-house request serving',
    context: 'after controlled source orchestration',
  },
  earlyApiUsers: {
    display: '20 → 50',
    before: 20,
    after: 50,
    label: 'Supported users',
    context: 'after thread-safety improvements',
  },
  productModules: {
    display: '9',
    value: 9,
    label: 'Product modules',
    context: 'delivered in a legacy-to-web migration',
  },
};

export const latencyChartData = [
  { name: 'Before', seconds: metrics.p99Latency.before },
  { name: 'After', seconds: metrics.p99Latency.after },
];

export const savingsChartData = [
  { name: 'Since Apr 2024', thousands: metrics.cumulativeSavings.value },
  { name: 'Earlier vendor removal', thousands: metrics.vendorRetirementSavings.value },
];

export const sourceServingChartData = [
  { name: 'Before', percentage: metrics.sourceServing.before },
  { name: 'After', percentage: metrics.sourceServing.after },
];
