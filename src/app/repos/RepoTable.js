'use client';

import { PresentationFile, Send } from '@carbon/icons-react';
import {
  DataTable,
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
} from '@carbon/react';
import React from 'react';

const RepoTable = ({ rows, headers }) => {
  return (
    <DataTable rows={rows} headers={headers}>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getSelectionProps,
        getTableContainerProps,
        getExpandHeaderProps,
        getBatchActionProps,
        onInputChange,
        selectRow,
        selectedRows,
        getToolbarProps,
      }) => {
        const batchActionProps = {
          ...getBatchActionProps({
            onSelectAll: () => {
              rows.map((row) => {
                if (!row.isSelected) {
                  selectRow(row.id);
                }
              });
            },
          }),
        };
        return (
          <TableContainer
            title="very very rough table"
            description="vva-report mvp"
            {...getTableContainerProps()}
          >
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...batchActionProps}>
                <TableBatchAction
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={Send}
                >
                  Submit Issue
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={PresentationFile}
                >
                  Preview PDF
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                  renderIcon={PresentationFile}
                >
                  Preview Excel
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch onChange={onInputChange} />
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableExpandHeader
                    enableToggle={true}
                    {...getExpandHeaderProps()}
                  />
                  <TableSelectAll {...getSelectionProps()} />

                  {headers.map((header) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      <TableSelectRow
                        {...getSelectionProps({
                          row,
                        })}
                      />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>

                    <TableExpandedRow colSpan={headers.length + 2}>
                      <p>description of fragment</p>
                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }}
    </DataTable>
  );
};

export default RepoTable;
