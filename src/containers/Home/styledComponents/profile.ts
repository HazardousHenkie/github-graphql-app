import styled from 'styled-components'

export interface StyledProfileProps {
  className: string
}

export const ProfileStyled = styled('div')<StyledProfileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100%;

  .profile {
    &__title {
      font-family: 'Open Sans', sans-serif;
      color: ${props => props.theme.white};
      text-shadow: 0px 1px 1px ${props => props.theme.blackShadow};
      font-size: 3.5rem;
      margin: 0 0 0.875rem;
      z-index: 1;
    }

    &__description {
      color: ${props => props.theme.white};
      text-shadow: 0px 1px 1px ${props => props.theme.blackShadow};
      font-size: 1rem;
      margin: 0 0 5px;
      z-index: 1;
    }

    &__icon_list {
      display: flex;
      padding: 0;
      list-style: none;
      z-index: 1;
    }

    &__list_item {
      display: flex;
      align-items: center;
      margin-right: 10px;
      z-index: 1;
      color: ${props => props.theme.white};
      text-shadow: 0px 1px 1px ${props => props.theme.blackShadow};

      &:last-child {
        margin-right: 0;
      }
    }

    &__icon {
      margin-right: 5px;
      display: flex;
    }
  }
`
