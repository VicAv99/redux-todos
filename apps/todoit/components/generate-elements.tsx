import { PropsWithChildren } from 'react';

interface GenerateElementsProps<T> {
  items: T[];
  render: ((props: PropsWithChildren<T>) => JSX.Element);
  emptyItemsRender?: JSX.Element;
}

export function GenerateElements<T>({ render, emptyItemsRender, items = [] }: GenerateElementsProps<T>) {
  return <>{items.length ? items.map((value: T) => render(value)) : emptyItemsRender}</>;
};
