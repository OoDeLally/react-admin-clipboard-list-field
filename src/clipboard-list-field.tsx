import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import SvgIcon from '@material-ui/core/SvgIcon';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import classNames from 'classnames';
import { get } from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useCallback, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const menuRowPaddingInEm = 0.5;

const useStyles = makeStyles((theme: Theme) => ({
  field: {
    margin: `${-menuRowPaddingInEm}em 0 0 ${-menuRowPaddingInEm}em`,
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      '& $showOnHover': {
        display: 'block',
      },
    }
  },
  row: {
    position: 'relative',
    display: 'block',
    width: '100%',
    zIndex: 5,
    '&:hover': {
      '& $icon': {
        display: 'block',
      },
    },
    '& button': {
      width: `100%`,
      display: 'block',
      padding: `${menuRowPaddingInEm}em`,
      textTransform: 'none',
    },
  },
  icon: {
    display: 'none',
    height: '40%',
    position: 'absolute',
    top: '0.2em',
    zIndex: 10,
    padding: '0.2em',
    backgroundColor: theme.palette.background.default,
  },
  'icon-right': {
    right: '-1.5em',
  },
  'icon-left': {
    left: '-1.5em',
  },
  showOnHover: {
    display: 'none',
  },
  hiddenMenu: {
    width: '100%',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: theme.palette.background.default,
    '& button span': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }
}));


const Row = ({ text, iconPosition }: { text: string; iconPosition: IconPosition }) => {
  const [wasCopied, setWasCopied] = useState(false);
  const classes = useStyles();
  const handleMouseLeave = useCallback(() => setWasCopied(false), []);
  const handleCopied = useCallback(() => setWasCopied(true), []);
  return (
    <div className={classes.row} onMouseLeave={handleMouseLeave}>
      {
        iconPosition !== 'none' && (
          <SvgIcon
            className={classNames(
              classes.icon,
              (classes as any)[`icon-${iconPosition}`],
            )}
            component={wasCopied ? DoneOutlineIcon : FileCopyOutlinedIcon}
          />
        )
      }
      <CopyToClipboard text={text} onCopy={handleCopied}>
        <Button>
          {text}
        </Button>
      </CopyToClipboard>
    </div>
  );
};


type IconPosition = 'left' | 'right' | 'none';


export const ClipboardListField = ({ record, source, createRows, iconPosition = 'right' }: {
  record?: any;
  source: string;
  createRows: (value: unknown) => string[];
  iconPosition?: IconPosition;
}) => {
  const classes = useStyles();
  if (!record) {
    return null;
  }
  const id = get(record, source);
  if (!id) {
    return null;
  }
  const rows = createRows(id);
  if (!Array.isArray(rows)) {
    throw new Error(
      `Prop 'createRows' should return an array of string. ` +
      `Found ${JSON.stringify(rows)} for value ${JSON.stringify(id)}`
    );
  }
  if (rows.length === 0) {
    return null;
  }
  const [firstRow, ...otherRows] = rows;
  return (
    <div className={classes.field}>
      <Row text={firstRow} iconPosition={iconPosition} />
      {
        otherRows.length > 0 && (
          <div className={classNames(classes.hiddenMenu, classes.showOnHover)}>
            {
              otherRows.map((text, textIndex) => (
                <Row key={textIndex} text={text} iconPosition={iconPosition} />
              ))
            }
          </div>
        )
      }
    </div>
  );
};

ClipboardListField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
  createRows: PropTypes.func.isRequired,
  iconPosition: PropTypes.string,
};


ClipboardListField.defaultProps = { addLabel: true };
