'use client';
// This is required so that the CSS is extracted and injected on
// the server, to avoid a Flash of Unstyled Content.
//
// More info:
// https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components

import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components';
import {ReactNode, useState} from "react";

interface StyledComponentsRegistryProps {
  children: ReactNode;
}

export default function StyledComponentsRegistry({ children }: StyledComponentsRegistryProps) {
  const [styledComponentsStyleSheet] = useState(
    () => new ServerStyleSheet()
  );

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
