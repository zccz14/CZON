import assert from 'node:assert/strict';
import test from 'node:test';
import { buildIndexPageTitle } from './IndexPage';

test('uses site title with language on index page', () => {
  const title = buildIndexPageTitle({
    siteTitle: 'My Docs',
    lang: 'en',
  });

  assert.equal(title, 'My Docs - Index of en');
});

test('uses category title when category page is rendered', () => {
  const title = buildIndexPageTitle({
    siteTitle: 'My Docs',
    lang: 'en',
    categoryDisplayName: 'Guides',
  });

  assert.equal(title, 'My Docs - Guides');
});

test('falls back to CZON when site title is missing', () => {
  const title = buildIndexPageTitle({
    siteTitle: '',
    lang: 'zh-Hans',
  });

  assert.equal(title, 'CZON - Index of zh-Hans');
});
