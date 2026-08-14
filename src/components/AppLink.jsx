export default function AppLink({ to, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event('app:navigate'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return <a href={to} onClick={handleClick} {...props} />;
}
