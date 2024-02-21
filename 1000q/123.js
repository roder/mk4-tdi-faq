function calctire()
{
   with(document.tirecalc)
   {
      TrHgt_1.value = Math.round(((WD1.value * 25.4) + (2 * Sctwdth_1.value) * (Aspctratio_1.value / 100)) / .254) / 100;
      TrHgt_2.value = Math.round(((WD2.value * 25.4) + (2 * Sctwdth_2.value) * (Aspctratio_2.value / 100)) / .254) / 100;
      TrHgt_3.value = Math.round(((WD3.value * 25.4) + (2 * Sctwdth_3.value) * (Aspctratio_3.value / 100)) / .254) / 100;
      TrHgt_4.value = Math.round(((WD4.value * 25.4) + (2 * Sctwdth_4.value) * (Aspctratio_4.value / 100)) / .254) / 100;
      sidew_1.value = Math.round((Sctwdth_1.value * (Aspctratio_1.value / 100)) / .254) / 100
      sidew_2.value = Math.round((Sctwdth_2.value * (Aspctratio_2.value / 100)) / .254) / 100
      sidew_3.value = Math.round((Sctwdth_3.value * (Aspctratio_3.value / 100)) / .254) / 100
      sidew_4.value = Math.round((Sctwdth_4.value * (Aspctratio_4.value / 100)) / .254) / 100
      RH_2.value = Math.round((TrHgt_2.value - TrHgt_1.value)*100)/200;
      RH_3.value = Math.round((TrHgt_3.value - TrHgt_1.value)*100)/200;
      RH_4.value = Math.round((TrHgt_4.value - TrHgt_1.value)*100)/200;
      Twdth_2.value = Math.round((Sctwdth_2.value - Sctwdth_1.value)*100 / 25.4)/100;
      Twdth_3.value = Math.round((Sctwdth_3.value - Sctwdth_1.value)*100 / 25.4)/100;
      Twdth_4.value = Math.round((Sctwdth_4.value - Sctwdth_1.value)*100 / 25.4)/100;
      wheel_diameter_2.value = WD2.value - WD1.value;
      wheel_diameter_3.value = WD3.value - WD1.value;
      wheel_diameter_4.value = WD4.value - WD1.value;
      Wwdth_2.value = WwdthIN_2.value - WwdthIN_1.value;
      Wwdth_3.value = WwdthIN_3.value - WwdthIN_1.value;
      Wwdth_4.value = WwdthIN_4.value - WwdthIN_1.value;
      offset_2.value = (offsetIN_2.value - offsetIN_1.value) - (spacerIN_2.value - spacerIN_1.value);
      offset_3.value = (offsetIN_3.value - offsetIN_1.value) - (spacerIN_3.value - spacerIN_1.value);
      offset_4.value = (offsetIN_4.value - offsetIN_1.value) - (spacerIN_4.value - spacerIN_1.value);
      TW_inboard_2.value = Math.round(((Twdth_2.value / 2) + (offset_2.value / 25.4) + (Wwdth_2.value /2))*1000)/1000;
      TW_inboard_3.value = Math.round(((Twdth_3.value / 2) + (offset_3.value / 25.4) + (Wwdth_3.value /2))*1000)/1000;
      TW_inboard_4.value = Math.round(((Twdth_4.value / 2) + (offset_4.value / 25.4) + (Wwdth_4.value /2))*1000)/1000;
      TW_outboard_2.value = Math.round(((Twdth_2.value / 2) + (Wwdth_2.value / 2) - (offset_2.value / 25.4))*1000)/1000;
      TW_outboard_3.value = Math.round(((Twdth_3.value / 2) + (Wwdth_3.value / 2) - (offset_3.value / 25.4))*1000)/1000;
      TW_outboard_4.value = Math.round(((Twdth_4.value / 2) + (Wwdth_4.value / 2) - (offset_4.value / 25.4))*1000)/1000;
      track_width_2.value = TW_outboard_2.value * 2;
      track_width_3.value = TW_outboard_3.value * 2;
      track_width_4.value = TW_outboard_4.value * 2;
      circum_1.value = Math.round(TrHgt_1.value * Math.PI * 100) /100;
      circum_2.value = Math.round(TrHgt_2.value * Math.PI * 100) /100;
      circum_3.value = Math.round(TrHgt_3.value * Math.PI * 100) /100;
      circum_4.value = Math.round(TrHgt_4.value * Math.PI * 100) /100;
      speed_2.value = Math.round((speed_mph.value * circum_2.value / circum_1.value)*100) /100;
      speed_3.value = Math.round((speed_mph.value * circum_3.value / circum_1.value)*100) /100;
      speed_4.value = Math.round((speed_mph.value * circum_4.value / circum_1.value)*100) /100;
      speedo_2.value = Math.round(10000-(TrHgt_1.value/TrHgt_2.value) *10000) /100;
      speedo_3.value = Math.round(10000-(TrHgt_1.value/TrHgt_3.value) *10000) /100;
      speedo_4.value = Math.round(10000-(TrHgt_1.value/TrHgt_4.value) *10000) /100;
      engine_rpm_1.value = Math.round(((5280 / (circum_1.value / 12) * (speed_mph.value / 60))) * (diff_ratio.value) * (trans_ratio.value)) * 100 /100;
      engine_rpm_2.value = Math.round(((5280 / (circum_2.value / 12) * (speed_mph.value / 60))) * (diff_ratio.value) * (trans_ratio.value)) * 100 /100;
      engine_rpm_3.value = Math.round(((5280 / (circum_3.value / 12) * (speed_mph.value / 60))) * (diff_ratio.value) * (trans_ratio.value)) * 100 /100;
      engine_rpm_4.value = Math.round(((5280 / (circum_4.value / 12) * (speed_mph.value / 60))) * (diff_ratio.value) * (trans_ratio.value)) * 100 /100;
      gearing_1.value = (diff_ratio.value);
      gearing_2.value = Math.round(diff_ratio.value * circum_1.value / circum_2.value * 1000)/1000;
      gearing_3.value = Math.round(diff_ratio.value * circum_1.value / circum_3.value * 1000)/1000;
      gearing_4.value = Math.round(diff_ratio.value * circum_1.value / circum_4.value * 1000)/1000;
      topspeed_1.value = Math.round((TrHgt_1.value * redline.value) / (diff_ratio.value * trans_ratio.value * 336));
      topspeed_2.value = Math.round((TrHgt_2.value * redline.value) / (gearing_2.value * trans_ratio.value  * 336));
      topspeed_3.value = Math.round((TrHgt_3.value * redline.value) / (gearing_3.value * trans_ratio.value  * 336));
      topspeed_4.value = Math.round((TrHgt_4.value * redline.value) / (gearing_4.value * trans_ratio.value  * 336));
   }
}