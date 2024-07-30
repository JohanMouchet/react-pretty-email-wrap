import { Fragment } from "react";

/**
 * Insert [Word Break Opportunity tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr) (`<wbr />`) to help an email address wrap in a human readable way.
 *
 * @example
 * ```
 * <PrettyEmailWrap>name@domain.com</PrettyEmailWrap> // name<wbr />@domain.<wbr />com
 * ```
 */
export const PrettyEmailWrap = ({ children }: { children: string }) => {
  if (children.length === 0) {
    return null;
  }

  if (
    !["@", ".", "+", "-", "_"].some((character) => children.includes(character))
  ) {
    return null;
  }

  const split = children.split(/([@,.,+,-,_])/g);
  const replace = split.map((fragment, i) => {
    if (fragment === "@") {
      return (
        <Fragment key={i}>
          <wbr />@
        </Fragment>
      );
    }

    if (
      fragment === "." ||
      fragment === "+" ||
      fragment === "-" ||
      fragment === "_"
    ) {
      return (
        <Fragment key={i}>
          {fragment}
          <wbr />
        </Fragment>
      );
    }

    return <Fragment key={i}>{fragment}</Fragment>;
  });

  return <>{replace}</>;
};
