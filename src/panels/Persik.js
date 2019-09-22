import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import persik from '../img/persik.png';
import './Persik.css';
import './Text.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon24Back/> : <Icon28ChevronBack/>}
			</HeaderButton>}
		>
			Персик
		</PanelHeader>
		
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		<text className="Text"> Привет! Я Персик.</text>
		<text className="Text"> Буду рад с тобой познакомиться.</text>
		
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
