package lu.atozdigital.api.domaine;

public class Response {
    public String message;

    public Response() {
        super();
    }
    public Response(String message) {
        super();
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
