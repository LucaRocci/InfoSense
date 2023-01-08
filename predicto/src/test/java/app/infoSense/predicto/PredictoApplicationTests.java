package app.infoSense.predicto;

import app.infoSense.predicto.controller.StatisticsController;
import app.infoSense.predicto.entity.Province;
import app.infoSense.predicto.service.ContestoService;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticheProvinceService;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StatisticsController.class)
@RunWith(SpringRunner.class)
public class PredictoApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StatisticheProvinceService statisticheProvinceService;

    @MockBean
    private ProvinceService provinceService;

    @MockBean
    private EserciziService eserciziService;

    @MockBean
    private ContestoService contestoService;

    @Test
    @Ignore
    public void testApiListProvince() throws Exception {

      /*  ArrayList<Province> provinceTest = new ArrayList<>();
        Province p= new Province(1L,"Torino",);
        provinceTest.add(p);*/

        ResultActions response = mockMvc.perform(get("/statistics/province")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());


    }


}
