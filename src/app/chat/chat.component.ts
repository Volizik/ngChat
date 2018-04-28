import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    ws: WebSocket;
    title = 'Test chat';
    socket;
    input = '';
    dataFromSocket = [];

    constructor(/*private _ws: WebsocketService*/) {
        // this.socket = _ws.connect('ws://194.247.179.153:8765').subscribe(data => {
        //     console.log('Response from websocket: ', data);
        //     this.dataFromSocket.push(data);
        // });
        this.ws = new WebSocket('ws://194.247.179.153:8765');
    }

    ngOnInit() {
        this.ws.onopen = () => {
            console.log('Соединение открыто!');
        };
        this.ws.onmessage = (data) => {
            console.log('Ответ от сервера ', data);
            this.dataFromSocket.push(data.data);
        };
    }

    sendMessage() {
        this.ws.send(this.input);
        // console.log('new message from client to websocket: ', message);
        // this.socket.next(message);
        this.input = '';
    }

}
