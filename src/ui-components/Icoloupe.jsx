/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Icoloupe(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="12px"
      height="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Icoloupe")}
    >
      <View
        width="12px"
        height="12px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ico-loupe")}
      >
        <Icon
          width="10.3536376953125px"
          height="10.353515625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 10.3536376953125,
            height: 10.353515625,
          }}
          paths={[
            {
              d: "M6.45286 7.1599C5.77551 7.68645 4.92437 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 4.92434 7.68647 5.77545 7.15996 6.45279L10.3536 9.6464L9.6465 10.3535L6.45286 7.1599ZM7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="8.33%"
          bottom="5.39%"
          left="8.33%"
          right="5.39%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
