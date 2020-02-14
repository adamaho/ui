import {Component, Orientation} from "./Divider";
import styled, {css} from "styled-components";
import * as React from "react";

interface CustomProps {
    component?: Component;
    orientation?: Orientation;
    margin?: string;
    thickness?: string;
    text?: React.ReactNode;
    textAlign?: string;
    bgColor?: string;
    fontSize?: number;
}

interface StyledDividerProps {
    customProps: CustomProps;
    className?: string;
    height?: number;
}

export const StyledLi = styled.li<{orientation: Orientation}>`
    ${() => css`
        display: inline-block;
        vertical-align: middle;
    `};
`;

export const StyledDivider = styled.hr<StyledDividerProps>`
    ${({customProps, theme, height}) => css`
        width: 100%;
        
        ${(customProps.orientation === 'vertical') && css`
            margin: 2px 5px 0 5px;
            width: auto;
            color: ${theme.dividerBorder};
            height: inherit;

            ${(customProps.margin) && css`
              margin: 2px ${customProps.margin} 0 ${customProps.margin};
            `}
        `};
        
        ${(customProps.orientation === 'horizontal' || !customProps.orientation) && css`
            ${(customProps.margin) && css`
              margin: ${customProps.margin} 0;
              color: ${theme.dividerBorder};
            `}
        `};  
        
        ${(customProps.thickness) && css`
          border-top: ${customProps.thickness} solid ${theme.dividerBorder};
        `};   
        
        ${(customProps.thickness && customProps.orientation === 'vertical') && css`
          border-left: ${customProps.thickness} solid;
        `}; 
        
        ${(customProps.text) && css`
            position: relative;
            line-height: 1rem;
            outline: 0;
            border: 0;
            height: 1rem;
            border-left: 0;
            display: flex;
            justify-content: center;
            border-top: unset;
            
            ${(customProps.fontSize) && css`
                line-height: ${height}rem;
                height: ${height}rem;
            `};
            
            &:before{
                content: '';
                position: absolute;
                width: 100%;
                top: 50%;
                left: 0;
                height: 1px;
                transform: translateY(-50%);
                background: linear-gradient(to right, ${theme.dividerBackground}, ${theme.dividerBackground}, ${theme.dividerBackground});
            }
            
            &:after{
                content: attr(data-content);
                position: absolute;
                background: ${theme.dividerTextPrimaryBackground};
                padding: 0 .5em;  
                display:flex;
                flex-direction:row;
                align-items: center;
                justify-content: center;
            }
        `}; 
        
        ${(customProps.thickness !== '1px') && css`
            &:before{
              height: ${customProps.thickness};
            }
        `}; 
        
        ${(customProps.textAlign === 'left') && css`
            justify-content: flex-start;
            padding-left: 30px;
        `};    
        
        ${(customProps.textAlign === 'right') && css`
            justify-content: flex-end;
            padding-right: 30px;
        `};  
        
        ${(customProps.bgColor) && css`
            &:after{
                background: ${customProps.bgColor};
            }
        `}; 
        
        ${(customProps.fontSize) && css`
            &:after{
                font-size: ${customProps.fontSize}rem;
            }
        `};        
    `};
`;