export default function AppLink({ to, onClick, ...props }) {
  const handleClick = (event) => {
    // Modifier or non-primary clicks open a new tab/window: let the browser handle
    // them and skip onClick, so e.g. Cmd/Ctrl-click doesn't close the mobile menu.
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event('app:navigate'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return <a href={to} onClick={handleClick} {...props} />;
}
