export const getNameOfBlock = (link) => {
	const hrefLink = link.href;
	const res = hrefLink.split('#').pop();
	return res;
 }