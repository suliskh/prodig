import * as React from 'react';
import styles from './Hello.scss';

export interface IHelloProps { text: string; }

export default function Hello6(props: IHelloProps) {
	return (
		<h1 className={styles['Hello--info']}>
			{props.text}
		</h1>
	);
}
