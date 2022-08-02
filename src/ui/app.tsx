import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const StyledHeading = styled.h1`
	width: 100%;
	text-align: center;
`;

const App: React.FC = () => {
	return (
		<main>
			<StyledHeading>Chrome V3 Boilerplate</StyledHeading>
		</main>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
