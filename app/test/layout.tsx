export default function Layout({children}: LayoutProps<"/test">) {
	return (
		<section>
			Layout children:
			{children}
		</section>
	);
}