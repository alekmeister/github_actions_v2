import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from 'src/app/app.module.scss';
const Modal = React.lazy(() => import('src/components/modal'));

const AnotherComponent = React.lazy(
	() => import('src/components/another-component')
);

export const App = () => {
	return (
		<div className={styles.page}>
			<div className={styles.links}>
				<Link to='/another' className={styles.link}>
					Перейти на станицу c компонентом AnotherComponent
				</Link>
				<Link to='/modal' className={styles.link}>
					Перейти на станицу c компонентом Modal
				</Link>
			</div>
			<Routes>
				<Route
					path='/modal'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Modal />
						</Suspense>
					}
				/>
				<Route
					path='/another'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<AnotherComponent />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};
