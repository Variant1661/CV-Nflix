export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return <>{children}</>;
}
