import { Button } from '../common-components/Button.js/Button';
import { Header } from '../common-components/Header/Header';
import { SearchField } from '../common-components/SearchField/SearchField';
export function Search() {
	return (
		<div>
     		<Header/>
			<SearchField placeholder="Digite o nome de uma Banda"/>

		</div>
	);
}