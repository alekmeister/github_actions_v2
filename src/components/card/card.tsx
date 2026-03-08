import type { Card } from 'src/components/card-list/card-list.tsx';
import styles from 'src/components/card/card.module.scss';
type CardProps = Pick<Card, 'name'>;

export default function Card({ name }: CardProps) {
	return (
		<article className={styles.card}>
			<h3 className={styles.title}>{name}</h3>
		</article>
	);
}
