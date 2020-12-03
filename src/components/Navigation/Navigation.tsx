import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { connectSocket } from '../../store/socket/actions';
import StyledNavigation from './StyledNavigation';
import { NavLink } from 'react-router-dom';
import { withTranslations } from '../../utilities/withTranslations';
import { IAppContext } from '../../utilities/TranslationsProvider';
import { IMessage } from '../Message/Message';

interface INavDispatchProps {
  connectToSockets: () => void;
}

interface INavProps {
  appContext: IAppContext;
  messages: [];
  connectToSockets: () => void;
  username: string;
}

interface INavState {
  shouldBlink: boolean;
  unreadMessages: number;
  receivedUnreadMessages: IMessage[];
}

export class Navigation extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      shouldBlink: false,
      unreadMessages: 0,
      receivedUnreadMessages: [],
    };
  }

  public componentDidMount(): void {
    this.props.connectToSockets();
  }

  public render() {
    const { appContext } = this.props;

    return appContext && (
      <StyledNavigation>
        <li>
          <NavLink exact={true} activeClassName='active'
                   to='/chat'>
            <span>{appContext.nav.chatTabLabel}</span>
          </NavLink>
        </li>
      </StyledNavigation>
    );
  }

}

const mapStateToProps = (state: any) => ({
  messages: state.messageState.messages,
  username: state.messageState.username,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): INavDispatchProps => ({
  connectToSockets: () => dispatch(connectSocket())
});

export default withTranslations(connect(mapStateToProps, mapDispatchToProps)(Navigation));