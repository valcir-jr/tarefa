class Meteo {
    constructor(
      public date: Date,
      public time: string,
      public tempC: number,
      public hum: number,
      public pressBar: number,
      public tempCabineC: number,
      public charge: number,
      public srwm: number,
      public windPeak_ms: number,
      public windSpeed_inst: number,
      public windSpeed_avg: number,
      public windDir_inst: number,
      public windDir_avg: number
    ) {}
};

export default Meteo;