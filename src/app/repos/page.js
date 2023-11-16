'use client';

import { Column, Grid } from '@carbon/react';
import RepoTable from './RepoTable';

const headers = [
  {
    key: 'prop',
    header: 'Property',
  },
  {
    key: 'file_path',
    header: 'File',
  },
  {
    key: 'vscode',
    header: 'VSCode Link',
  },
];

const rows = [
  {
    id: '1',
    prop: 'asm',
    file_path: 'path/to/file.cpp',
    vscode: 'link.vscode',
  },
  {
    id: '2',
    prop: 'GlobalVariables',
    file_path: 'path/to/file/glob.cpp',
    vscode: 'link.vscode.for.glob',
  },
  {
    id: '3',
    prop: 'F1O37',
    file_path: 'path/to/file/f.cpp',
    vscode: 'link.vscode.for.f',
  },
];

function RepoPage() {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
}

export default RepoPage;
