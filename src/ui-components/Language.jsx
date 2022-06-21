/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Icochevron from "./Icochevron";
export default function Language(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="32px"
      height="16px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Language")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="32px"
        height="16px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="EN"
          {...getOverrideProps(overrides, "EN")}
        ></Text>
        <Icochevron
          width="12px"
          height="12px"
          position="absolute"
          top="2px"
          left="20px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ico-chevron")}
        ></Icochevron>
      </View>
    </View>
  );
}
