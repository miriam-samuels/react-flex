import React, { useContext } from 'react';
import { DonutChartContext, ItemWithRenderProps } from './DonutChart';

export type Props = { item: ItemWithRenderProps };

const LegendItem: React.FC<Props> = ({ item }) => {
  const { className, graphWidth, width } = useContext(DonutChartContext);
  const {
    classNames,
    clickHandlers,
    index,
    isEmpty,
    label,
    value,
    ...restItemRenderProps
  } = item;
  const classSuffix = 'legend-item';
  const legendWidth = width;
  const sqUnit = legendWidth / 50;
  // const yOffset = 1.5;

  console.log(restItemRenderProps)
  return (
    <span
      {...clickHandlers}
      className={`${className}-${classSuffix} ${classNames}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5em'
      }}
    >
      <span style={{ display: 'inline-block', backgroundColor: `${restItemRenderProps.fill}`, width: `${sqUnit}px`, height: `${sqUnit}px` }}></span>
      {`${label} `}
    </span>
  );
};

export default LegendItem;
