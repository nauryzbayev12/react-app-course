import cls from './TestPage.module.css'

const Box = ({ label, size = 'md' }) => (
	<div className={`${cls.box} ${cls[size]}`}>{label}</div>
)

const FlexExample = ({ title, containerClass, children }) => (
	<div className={cls.example}>
		<p className={cls.label}>{title}</p>
		<div className={`${cls.container} ${containerClass}`}>{children}</div>
	</div>
)

export const TestPage = () => (
	<div className={cls.page}>
		<h1 className={cls.heading}>Flexbox — примеры</h1>

		<section className={cls.section}>
			<h2 className={cls.sectionTitle}>flex-direction</h2>
			<p className={cls.hint}>Определяет направление главной оси (куда выстраиваются элементы)</p>

			<FlexExample title="row — в ряд слева направо (по умолчанию)" containerClass={cls.row}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="column — в колонку сверху вниз" containerClass={cls.column}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="row-reverse — в ряд справа налево" containerClass={cls.rowReverse}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="column-reverse — в колонку снизу вверх" containerClass={cls.columnReverse}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>
		</section>

		<section className={cls.section}>
			<h2 className={cls.sectionTitle}>justify-content</h2>
			<p className={cls.hint}>Выравнивание по главной оси (горизонтально при flex-direction: row)</p>

			<FlexExample title="flex-start — к началу" containerClass={cls.justifyStart}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="flex-end — к концу" containerClass={cls.justifyEnd}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="center — по центру" containerClass={cls.justifyCenter}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="space-between — края прижаты, между равные промежутки" containerClass={cls.justifyBetween}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="space-around — равные отступы вокруг каждого элемента" containerClass={cls.justifyAround}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>

			<FlexExample title="space-evenly — одинаковое расстояние между всеми" containerClass={cls.justifyEvenly}>
				<Box label="1" /><Box label="2" /><Box label="3" />
			</FlexExample>
		</section>

		<section className={cls.section}>
			<h2 className={cls.sectionTitle}>align-items</h2>
			<p className={cls.hint}>Выравнивание по поперечной оси (вертикально при flex-direction: row)</p>

			<FlexExample title="stretch — растянуть на всю высоту (по умолчанию)" containerClass={cls.alignStretch}>
				<div className={cls.stretchBox}>1</div>
				<div className={cls.stretchBox}>2</div>
				<div className={cls.stretchBox}>3</div>
			</FlexExample>

			<FlexExample title="flex-start — к верху" containerClass={cls.alignStart}>
				<Box label="1" size="sm" /><Box label="2" size="md" /><Box label="3" size="lg" />
			</FlexExample>

			<FlexExample title="flex-end — к низу" containerClass={cls.alignEnd}>
				<Box label="1" size="sm" /><Box label="2" size="md" /><Box label="3" size="lg" />
			</FlexExample>

			<FlexExample title="center — по центру" containerClass={cls.alignCenter}>
				<Box label="1" size="sm" /><Box label="2" size="md" /><Box label="3" size="lg" />
			</FlexExample>

			<FlexExample title="baseline — по базовой линии текста" containerClass={cls.alignBaseline}>
				<div className={`${cls.box} ${cls.textSm}`}>Aa</div>
				<div className={`${cls.box} ${cls.textLg}`}>Bb</div>
				<div className={`${cls.box} ${cls.textMd}`}>Cc</div>
			</FlexExample>
		</section>
	</div>
)
