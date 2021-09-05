import styled from "styled-components";
import { LinkExternal2 } from "../../../../components/Link"
import { UserMenuItemProps } from "./types";

export const PreferencesMenuItem = styled.button<UserMenuItemProps>`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text2};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;

export const MenuItemExternal = styled(LinkExternal2)`
  align-items: center;
  border: 0;
  background: transparent;
  background: transparent;
  color: ${({ theme }) => theme.colors.text2}; 
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  &:hover {
    color: ${({ theme }) => theme.colors.text1};
    cursor: pointer;
    text-decoration: none;
  }
  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);    
  }
`;

export const ToggleMenuItem = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: none;
display: flex;
flex: 1;
flex-direction: row;
align-items: center;
padding: 0.5rem 0.5rem;
justify-content: space-between;
font-size: 1rem;
font-weight: 500;
color: ${({ theme }) => theme.colors.text2};
:hover {
  color: ${({ theme }) => theme.colors.text1};
  cursor: pointer;
  text-decoration: none;
}
`;

export const DropdownContent = styled.div`  
  box-shadow: ${({ theme }) => theme.shadows.level1};
  padding: 16px;
  max-height: 400px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: ${({ theme }) => theme.radii.small};
`;