/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Icochevron(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="12px"
      height="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Icochevron")}
    >
      <View
        width="12px"
        height="12px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ico-chevron")}
      >
        <Icon
          width="8px"
          height="6px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 6 }}
          paths={[
            {
              d: "M8 0L0 0L4 6L8 0Z",
              fill: "rgba(126,129,144,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="25%"
          bottom="25%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
