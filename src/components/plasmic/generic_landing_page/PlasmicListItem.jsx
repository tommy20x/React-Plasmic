// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wMMeiYinj2S8kNzikX15kk
// Component: 0Jt4ZLWL6KCvr
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: wMMeiYinj2S8kNzikX15kk/projectcss
import sty from "./PlasmicListItem.module.css"; // plasmic-import: 0Jt4ZLWL6KCvr/css
import CheckCircleIcon from "./icons/PlasmicIcon__CheckCircle"; // plasmic-import: YjFFJF7soeylAn/icon

export const PlasmicListItem__VariantProps = new Array(
  "bottomBorder",
  "leftCheck"
);

export const PlasmicListItem__ArgProps = new Array("children", "icon");

export const defaultListItem__Args = {};

function PlasmicListItem__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultListItem__Args, props.args);
  const $props = args;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbottomBorder_dark]: hasVariant(
            variants,
            "bottomBorder",
            "dark"
          ),

          [sty.rootbottomBorder_light]: hasVariant(
            variants,
            "bottomBorder",
            "light"
          ),

          [sty.rootleftCheck]: hasVariant(variants, "leftCheck", "leftCheck")
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Something amazing",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <CheckCircleIcon
            className={classNames(projectcss.all, sty.svg__kYsBl)}
            role={"img"}
          />
        ),

        value: args.icon
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListItem__ArgProps,
      internalVariantPropNames: PlasmicListItem__VariantProps
    });

    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem";
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps
  }
);

export default PlasmicListItem;
/* prettier-ignore-end */
