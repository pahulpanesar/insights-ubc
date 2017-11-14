import restify = require('restify');
import InsightFacade from "../controller/InsightFacade";

export default class Routes {
    public static insightFace = new InsightFacade();

    public static putDataset(req: restify.Request, res: restify.Response, next: restify.Next) {
        try{
            var id: string = req.params.id;
            if(id === "courses" || id === "rooms"){
                let buffer: Array<any> = [];
                req.on('data', (chunk: any) => {
                    buffer.push(chunk);
                });
                req.once('end', () => {
                    let con = Buffer.concat(buffer);
                    req.body = con.toString('base64');
                    let face = this.insightFace;
                    return face.addDataset(id, req.body).then((ful) => {
                        res.json(ful.code, {success: ful});
                    }).catch((err: any) => {
                        res.json(err.code, {err: err.message});
                    });
                });
            }
        }
        catch (err) {
            res.send(400, {err: err.message});
        }
        return next();
    }

    public static deleteDataset(req: restify.Request, res: restify.Response, next: restify.Next){
        try{
            var id: string = req.params.id;
            let buffer: Array<any> = [];
            req.on('data', (chunk: any) => {
                buffer.push(chunk);
            });
            req.once('end', () => {
                let con = Buffer.concat(buffer);
                req.body = con.toString('base64');
                let face = this.insightFace;
                return face.removeDataset(id).then((ful) => {
                    res.json(ful.code, {success: ful});
                }).catch((err: any) => {
                    res.json(err.code, {err: err.message});
                });
            });
        }
        catch (err) {
            res.send(404, {err: err.message});
        }
        return next();
    }

    public static postQuery(req: restify.Request,res: restify.Response, next: restify.Next) {
        try{
            let query: any = req.params;
            let face = this.insightFace;
            return face.performQuery(query).then((ful) => {
                res.json(ful.code, ful.body);
            }).catch((err: any) => {
                res.json(err.code, {error: err.message});
            });
        }
        catch (err) {
            res.send(424);
        }
        return next();
    }
}