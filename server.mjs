import express from "express";
import serveStatic from "serve-static";
import compression from "compression";

const port = 4000;

const app = express();

//compressing gzip
app.use(compression());

app.use(
	serveStatic("dist", {
		maxAge: "365d", //seting public and private cache to a year, etag and last-modified are default true
		staleWhileRevalidate: 86400, //seting stale while revalidate to a day
		setHeaders: setCustomCacheControl, //seting custom cache control for html files
	})
);

app.listen(port);

function setCustomCacheControl(res, path) {
	if (serveStatic.mime.lookup(path) === "text/html") {
		// Custom Cache-Control for HTML files
		res.setHeader("Cache-Control", "public, max-age=0");
		res.setHeader("Cache-Control", "max-age=60, stale-while-revalidate=60");
	}
}
