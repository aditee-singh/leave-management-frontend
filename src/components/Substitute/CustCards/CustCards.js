import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const CustCards = ({ requestCards }) => {
  const subsStatus = (status, i) => {
    alert(`${status} request of card with index ${i}`);
  };
  return (
    <>
      {requestCards.map((rc, i) => (
        <Card sx={{ minWidth: 345, margin: "10px", paddingBottom: "6px" }}>
          <CardContent>
            <h3>Requested By</h3>
            <p>{rc.faculty}</p>

            <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
              <Box sx={{ p: 1, flexGrow: 1 }}>
                <b>Date</b>
              </Box>
              <Box sx={{ p: 1 }}>
                <b>Time</b>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
              <Box sx={{ p: 1, flexGrow: 1 }}>{rc.date}</Box>
              <Box sx={{ p: 1 }}>{rc.time}</Box>
            </Box>

            <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
              <Box sx={{ p: 1, flexGrow: 1 }}>
                <b>Subject</b>
              </Box>
            </Box>
            <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
              <Box sx={{ p: 1, flexGrow: 1 }}>{rc.subject}</Box>
            </Box>
          </CardContent>
          <CardActions name="action">
            <Button
              variant="contained"
              size="small"
              sx={{ margin: "20px" }}
              onClick={() => {
                subsStatus("accepted", i);
              }}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                subsStatus("rejected", i);
              }}
            >
              Reject
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default CustCards;
