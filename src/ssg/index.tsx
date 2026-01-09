import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IRenderContext } from '../types';
import { App } from './app';

export const renderToHTML = (context: IRenderContext) => {
  return renderToStaticMarkup(<App {...context} />);
};
