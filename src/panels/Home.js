import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, platform, IOS } from '@vkontakte/vkui';
import persik from '../img/persik.png';
import './Avatar.css';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>ВГости: Ваши гости ВКонтакте</PanelHeader>
			<img className="Avatar" src={persik} alt="Persik The Cat"/>
			<Button size="l" level="1" onClick={go} data-to="persik">
				Персик
			</Button>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
