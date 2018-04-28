import {Injectable} from '@angular/core';
import {Subject, Observable, Observer} from 'rxjs';

@Injectable()
export class WebsocketService {
    // 'ws://194.247.179.153:8765'
    private socket: Subject<MessageEvent>;
    ws: WebSocket;

    constructor() {
    }

    public connect(url): Subject<MessageEvent> {
        if (!this.socket) {
            this.socket = this.create(url);
        }
        return this.socket;
    }

    private create(url) {
        this.ws = new WebSocket(url);
        this.ws.onopen = () => { alert('Соединение установлено!'); };
        const observable = Observable.create((obs: Observer<Object>) => {
            this.ws.onmessage = obs.next.bind(obs);
            this.ws.onerror = obs.error.bind(obs);
            this.ws.onclose = obs.complete.bind(obs);
        });
        const observer = {
            next: (data: MessageEvent) => {
                if (this.ws.readyState === WebSocket.OPEN) {
                    this.ws.send(JSON.stringify(data));
                }
            }
        };
        return Subject.create(observer, observable);
    }

}
