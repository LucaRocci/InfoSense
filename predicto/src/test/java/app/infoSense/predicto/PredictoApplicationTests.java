package app.infoSense.predicto;

import app.infoSense.predicto.Controller.StatisticsController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(StatisticsController.class)
class PredictoApplicationTests {

    @Autowired
    private MockMvc mvc;

    @Test
    public void getProvinceTest() throws  Exception{
        mvc.perform(MockMvcRequestBuilders
                .get("/province")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

}
