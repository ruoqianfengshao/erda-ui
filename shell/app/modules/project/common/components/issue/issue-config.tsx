// Copyright (c) 2021 Terminus, Inc.
//
// This program is free software: you can use, redistribute, and/or modify
// it under the terms of the GNU Affero General Public License, version 3
// or later ("AGPL"), as published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import i18n from 'i18n';
import React from 'react';
import { Icon as CustomIcon, ErdaIcon, Badge } from 'common';
import './issue-config.scss';

export enum ISSUE_TYPE {
  ALL = 'ALL',
  EPIC = 'EPIC',
  REQUIREMENT = 'REQUIREMENT',
  TASK = 'TASK',
  BUG = 'BUG',
  TICKET = 'TICKET',
}

export const ISSUE_ICON = {
  iteration: <CustomIcon type="bb1" className="issue-icon iteration" />,
  priority: {
    // 优先级icon
    URGENT: <ErdaIcon type="jinji" size="20px" />,
    HIGH: <ErdaIcon type="gao" size="20px" />,
    NORMAL: <ErdaIcon type="zhong" size="20px" />,
    LOW: <ErdaIcon type="di" size="20px" />,
  },
  issue: {
    // 时间类型icon
    REQUIREMENT: <ErdaIcon type="xuqiu" size="28px" className="pointer-events-none" />,
    TASK: <ErdaIcon type="renwu" size="28px" className="pointer-events-none" />,
    BUG: <ErdaIcon type="quexian" size="28px" className="pointer-events-none" />,
    EPIC: <ErdaIcon type="lichengbei" size="28px" className="pointer-events-none" />,
    TICKET: <ErdaIcon type="gongdan" size="28px" className="pointer-events-none" />,
  },
  severity: {
    // 严重程度icon（bug）
    FATAL: <CustomIcon type="P0" className="issue-icon severity fatal" />,
    SERIOUS: <CustomIcon type="P1" className="issue-icon severity serious" />,
    NORMAL: <CustomIcon type="P2" className="issue-icon severity normal" />,
    SLIGHT: <CustomIcon type="P3" className="issue-icon severity slight" />,
    SUGGEST: <CustomIcon type="P4" className="issue-icon severity suggest" />,
  },
  state: {
    // 状态
    OPEN: <CustomIcon type="wh" className="issue-icon state wh" />,
    WORKING: <CustomIcon type="jxz" className="issue-icon state jxz" />,
    TESTING: <CustomIcon type="jxz" className="issue-icon state jxz" />,
    DONE: <CustomIcon type="tg" className="issue-icon state tg" />,
    RESOLVED: <CustomIcon type="tg" className="issue-icon state tg" />,
    REOPEN: <CustomIcon type="zt" className="issue-icon state zt" />,
    WONTFIX: <CustomIcon type="zs" className="issue-icon state zs" />,
    DUP: <CustomIcon type="zs" className="issue-icon state zs" />,
    CLOSED: <CustomIcon type="tg" className="issue-icon state tg" />,
  },
  complexity: {
    // 复杂度
    EASY: <ErdaIcon type="rongyi" size="20px" className="mr-1" />,
    NORMAL: <ErdaIcon type="zhongdengnandu" size="20px" className="mr-1" />,
    HARD: <ErdaIcon type="nan" size="20px" className="mr-1" />,
  },
};

export const ISSUE_COMPLEXITY_MAP = {
  HARD: {
    value: 'HARD',
    label: i18n.t('dop:Complex'),
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.complexity.HARD}
        {i18n.t('dop:Complex')}
      </div>
    ),
  },
  NORMAL: {
    value: 'NORMAL',
    label: i18n.t('Medium'),
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.complexity.NORMAL}
        {i18n.t('Medium')}
      </div>
    ),
  },
  EASY: {
    value: 'EASY',
    label: i18n.t('dop:Easy'),
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.complexity.EASY}
        {i18n.t('dop:Easy')}
      </div>
    ),
  },
};

export const BUG_SEVERITY_MAP = {
  FATAL: {
    value: 'FATAL',
    label: `P0 ${i18n.t('dop:Fatal')}`,
    icon: ISSUE_ICON.severity.FATAL,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.severity.FATAL}
        {i18n.t('dop:Fatal')}
      </div>
    ),
  },
  SERIOUS: {
    value: 'SERIOUS',
    label: `P1 ${i18n.t('dop:Serious')}`,
    icon: ISSUE_ICON.severity.SERIOUS,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.severity.SERIOUS}
        {i18n.t('dop:Serious')}
      </div>
    ),
  },
  NORMAL: {
    value: 'NORMAL',
    label: `P2 ${i18n.t('dop:Medium-normal')}`,
    icon: ISSUE_ICON.severity.NORMAL,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.severity.NORMAL}
        {i18n.t('dop:Medium-normal')}
      </div>
    ),
  },
  SLIGHT: {
    value: 'SLIGHT',
    label: `P3 ${i18n.t('dop:Slight')}`,
    icon: ISSUE_ICON.severity.SLIGHT,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.severity.SLIGHT}
        {i18n.t('dop:Slight')}
      </div>
    ),
  },
  SUGGEST: {
    value: 'SUGGEST',
    label: `P4 ${i18n.t('dop:Suggestion')}`,
    icon: ISSUE_ICON.severity.SUGGEST,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.severity.SUGGEST}
        {i18n.t('dop:Suggestion')}
      </div>
    ),
  },
};

export const ISSUE_TYPE_MAP = {
  REQUIREMENT: {
    value: 'REQUIREMENT',
    label: i18n.t('Requirement'),
    icon: ISSUE_ICON.issue.REQUIREMENT,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.issue.REQUIREMENT}
        {i18n.t('Requirement')}
      </div>
    ),
  },
  TASK: {
    value: 'TASK',
    label: i18n.t('Task'),
    icon: ISSUE_ICON.issue.TASK,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.issue.TASK}
        {i18n.t('Task')}
      </div>
    ),
  },
  BUG: {
    value: 'BUG',
    label: i18n.t('Bug'),
    icon: ISSUE_ICON.issue.BUG,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.issue.BUG}
        {i18n.t('Bug')}
      </div>
    ),
  },
  TICKET: {
    value: 'TICKET',
    label: i18n.t('dop:ticket'),
    icon: ISSUE_ICON.issue.TICKET,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.issue.TICKET}
        {i18n.t('dop:ticket')}
      </div>
    ),
  },
  EPIC: {
    value: 'EPIC',
    label: i18n.t('dop:Milestone'),
    icon: ISSUE_ICON.issue.EPIC,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.issue.EPIC}
        {i18n.t('dop:Milestone')}
      </div>
    ),
  },
};

export const ISSUE_PRIORITY_MAP = {
  URGENT: {
    value: 'URGENT',
    label: i18n.t('dop:Urgent'),
    icon: ISSUE_ICON.priority.URGENT,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.priority.URGENT}
        {i18n.t('dop:Urgent')}
      </div>
    ),
  },
  HIGH: {
    value: 'HIGH',
    label: i18n.t('High'),
    icon: ISSUE_ICON.priority.HIGH,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.priority.HIGH}
        {i18n.t('High')}
      </div>
    ),
  },
  NORMAL: {
    value: 'NORMAL',
    label: i18n.t('Medium'),
    icon: ISSUE_ICON.priority.NORMAL,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.priority.NORMAL}
        {i18n.t('Medium')}
      </div>
    ),
  },
  LOW: {
    value: 'LOW',
    label: i18n.t('Low'),
    icon: ISSUE_ICON.priority.LOW,
    iconLabel: (
      <div className="flex items-center">
        {ISSUE_ICON.priority.LOW}
        {i18n.t('Low')}
      </div>
    ),
  },
};

export const ISSUE_PRIORITY_LIST = Object.values(ISSUE_PRIORITY_MAP);

export const REQUIREMENT_PANEL_ICON = {
  OPEN: 'wks',
  WORKING: 'jxz1',
  TESTING: 'csz',
  DONE: 'yjs',
};

export const TASK_PANEL_ICON = {
  OPEN: 'wks',
  WORKING: 'jxz1',
  DONE: 'yjs',
};

export const ISSUE_BUTTON_STATE = {
  canOpen: { label: i18n.t('dop:Enable'), state: 'OPEN' },
  canDup: { label: i18n.t('dop:duplicated'), state: 'DUP' },
  canReOpen: { label: i18n.t('dop:reopen'), state: 'REOPEN' },
  canResolved: { label: i18n.t('dop:resolved'), state: 'RESOLVED' },
  canTesting: { label: i18n.t('dop:testing'), state: 'TESTING' },
  canWontfix: { label: i18n.t("dop:won't fix"), state: 'WONTFIX' },
  canWorking: { label: i18n.t('In Progress'), state: 'WORKING' },
  canClosed: { label: i18n.t('close'), state: 'CLOSED' },
  canDone: { label: i18n.t('dop:Completed'), state: 'DONE' },
};

export const EDIT_PROPS = {
  [ISSUE_TYPE.REQUIREMENT]: {
    titlePlaceHolder: i18n.t('dop:input the requirement name'),
    contentLabel: i18n.t('dop:requirement description'),
  },
  [ISSUE_TYPE.TASK]: {
    titlePlaceHolder: i18n.t('dop:input the task name'),
    contentLabel: i18n.t('dop:task description'),
  },
  [ISSUE_TYPE.BUG]: {
    titlePlaceHolder: i18n.t('dop:input the bug name'),
    contentLabel: i18n.t('dop:Description'),
  },
  [ISSUE_TYPE.TICKET]: {
    titlePlaceHolder: i18n.t('dop:Please enter the ticket name'),
    contentLabel: i18n.t('dop:ticket description'),
    panelTitle: i18n.t('dop:related task'),
  },
  [ISSUE_TYPE.EPIC]: {
    titlePlaceHolder: i18n.t('dop:input milestone name'),
    contentLabel: i18n.t('dop:milestone description'),
  },
};

export enum ISSUE_OPTION {
  REQUIREMENT = 'REQUIREMENT',
  TASK = 'TASK',
  BUG = 'BUG',
}

export const BUG_STAGE_OPTION = [
  {
    name: i18n.t('dop:demand design'),
    value: 'demandDesign',
  },
  {
    name: i18n.t('dop:architecture design'),
    value: 'architectureDesign',
  },
  {
    name: i18n.t('dop:code development'),
    value: 'codeDevelopment',
  },
];

export const TASK_TYPE_OPTION = [
  {
    name: i18n.t('design'),
    value: 'design',
  },
  {
    name: i18n.t('dev'),
    value: 'dev',
  },
  {
    name: i18n.t('test'),
    value: 'test',
  },
  {
    name: i18n.t('implement'),
    value: 'implement',
  },
  {
    name: i18n.t('Deployment'),
    value: 'deploy',
  },
  {
    name: i18n.t('cmp:Operator'),
    value: 'operator',
  },
];
