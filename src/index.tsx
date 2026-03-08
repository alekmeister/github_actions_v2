import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'src/app';
import 'src/styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<App />
			</BrowserRouter>
	</StrictMode>
);
