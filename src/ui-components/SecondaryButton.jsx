/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SecondaryButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="67px"
      height="32px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SecondaryButton")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="67px"
        height="32px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group")}
      >
        <View
          height="32px"
          position="absolute"
          bottom="0px"
          left="0px"
          right="0px"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(243,241,255,1)"
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="700"
          color="rgba(129,106,254,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="8px"
          left="14px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Log In"
          {...getOverrideProps(overrides, "Log In")}
        ></Text>
      </View>
    </View>
  );
}
