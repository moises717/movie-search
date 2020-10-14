import { useEffect, useState, useRef } from "react";

export default function useNearScreen({
	distance = "50px",
	externalRef,
	once = true,
} = {}) {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef();
	const onChange = (entries, observer) => {
		const el = entries[0];

		if (el.isIntersecting) {
			setShow(true);
			once && observer.disconnect();
		} else {
			!once && setShow(false);
		}
	};

	useEffect(function () {
		let observer;

		const element = externalRef ? externalRef.current : fromRef.current;

		Promise.resolve(
			typeof IntersectionObserver !== "undefined"
				? IntersectionObserver
				: import("intersection-observer")
		).then(() => {
			const observer = new IntersectionObserver(onChange, {
				rootMargin: distance,
			});
			if (element) observer.observe(element);
		});

		return observer && observer.disconnect();
	});

	return { isNearScreen, fromRef };
}
