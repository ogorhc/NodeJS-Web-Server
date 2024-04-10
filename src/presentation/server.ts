import express, { Router } from "express";
import path from "path";
import compression from "compression";

interface ServerOptions {
  port: number;
  public_path: string;
  routes: Router;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: ServerOptions) {
    const { port, public_path = "public", routes } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }
  async start() {
    /*
		Middlewares
	*/

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());

    /*
		Public Folder
	*/
    this.app.use(express.static(this.publicPath));

    /* 
	Routes
	*/

    this.app.use(this.routes);

    /* SPA */
    this.app.get("*", (req, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPath);
      return;
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on PORT: ${this.port}`);
    });
  }
}
