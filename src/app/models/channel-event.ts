export class ChannelEvent {
    public Name: string;
    public Data: any;

    public ChannelEvent(name: string, data: any) {
        this.Name = name;
        this.Data = data;
    }
}
