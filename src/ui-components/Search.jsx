/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Icoloupe from "./Icoloupe";
export default function Search(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="340px"
      height="32px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Search")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="340px"
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
          backgroundColor="rgba(248,248,248,1)"
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
        <Icoloupe
          width="12px"
          height="12px"
          position="absolute"
          top="10px"
          left="14px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ico-loupe")}
        ></Icoloupe>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(172,172,172,1)"
          lineHeight="16.40625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="8px"
          left="34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search here..."
          {...getOverrideProps(overrides, "Search here...")}
        ></Text>
      </View>
    </View>
  );
}
