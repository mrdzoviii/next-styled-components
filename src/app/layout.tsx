
import StyledComponentsRegistry from 'src/components/StyledComponentsRegistry';
import './styles.css';
import {ReactNode} from "react";

interface RootLayoutProps {
    children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>

        <footer>
          Copyright Whatever Inc.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
