export const Footer = () => {
  return (
    <footer className="flex py-6 w-full shrink-0 items-center justify-center px-4 border-t">
      <p className="text-sm text-muted-foreground">
        &copy; {`${new Date().getFullYear()}`} Text Sync. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
