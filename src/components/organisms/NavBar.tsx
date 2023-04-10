import { ImgLogo } from "@/resources";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="bg-white container-fluid  pt-1 pb-3  ">
      <div className="row justify-content-between d-flex align-content-between align-items-center">
        <div className="col-lg-2 col-5 col-sm-5 ">
          <Image src={ImgLogo} alt="Logo" />
        </div>
        <div className="col-lg-2 col-7 col-sm-7 ">
          <div className="row justify-content-around d-flex align-content-around">
            <div className="col-lg-2 col-4 col-sm-4 text-center text-lg-start">
              <p className="mt-auto mb-auto" style={{fontSize:"12px"}}>Mas opciones</p>
            </div>
            {icons.map((item) => (
              <div className="col-2" key={item.name}>
                <img
                  width="20px"
                  height="20px"
                  src={item.src}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const icons = [
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHUlEQVR4nO1aW4hcRRC9a4KvaETEoCgaJcEkyiLOVN+Znaq5ws6tumbVRHQUHxEE8QH+KAoaNfkRURGMCuKHwQcGfCCiiaKJD1QkEXQlMWJ+IhJNMDEJuoa80I3U7Mwymb2P7tnZzQh74P5Nne5TXd1VXT2eN4X/L3r8klxuSF4wKD8YlD/1A+RNQLLSL3PoecuPcyXNBTzPEN8PKB8blJ8A5W+Dsg+INwLxk7lS5byOKchhWAKSDYbkSNqnovIoFRtOIBEg/jyL0xAfMihL23FSM3qA5BFD/G/2gEcN/uyCBdXj4wiLxYXnA/IaNz5RzreSODNFGOSX3Qcc/T6cE0UnNBP6xNcC8V/tcgLxa84qAPnxcYhofKsbXgSSRw3J8Hg5geR2axF5jIJODFofeGWHnHKkvipDhsILMkVUq9VphnhzpwaeiA9I3s0UYijkMYbIvwLKM4ZkUR77L+wNwxm53JUnFwKeA2W+CUjeNiSH2/Dufp0UIN8NZSnmSM4OguDEGn/A86AUXQPILxrkHS22wzliky4E5ZVRA5SvDcmAzdEHwcKzDPKykaXPEsHrDEbVIAhOyfSs53m6z9RhzZECyO+lT2gkwW3XgWwGGbXr7z9DVwtKcrFBfid2BZA/gL5K3msT1Wp1GpDcpc4C5H/8QGanCVlhTDQzjdCUooImKfUKEP+mpNYhpdUA8V4NV4M8aEje12oBUO7T8Go9suNQcxjxeoO83NkbKs5geC8Q/zihmxn5IKCshbJcn5YAgyCY7iPf4SYCZQmQ7DwGp9NOQ3yPhpQ3HtRiEvkl90nwLkB5XveZCaJzi8VwFmDUD8QPajHYBt86xIHT2xYCJK86DrhZJ59VE+mGB5RPHVdnQ6FQPclZhCG5034QHtJ4bQ2Bvr6rTwWUnwHld4P8kYZJ82TyxDfYHdfSOPVWuIkw0Uwg2WO5OQf9cmVu0unS+vvWMt8vV+Ybkq2WYg5r9TwBq8GfpCW1fDmCGLsHYkt74l8sV+VhayGaH7IJZW3WmZ8vhVeMXUFZFfvbPrnIpsTXvWUtxKBsy/DKpqykWZscRrfE2H6ZPG54nUUo77AWAigHkolkn3rPziG8LCYct6TbyKoMIQetheiPO3GxMShvxDhid5pNUXMO8d6UE3K/i5A/Eki+0iuwLU8tBMc6Yk/2+LI0xZHb7YUQb4khGS6QXGbLobVQ/Mryrizb3jCcoSuX4MyNDkJqFWkryWprgnr2Tthj26zmgPJ0gv3rLkKeaCXwMfRdhBiShxIm8o2NvV+uzI3rG2i57zKJgRbjzzxHJNVSVvftOmo3yTEOjXo9W2iNdFR8oyyxNq7HeNIRDshP2fL4yLe12G/1XKGea+QN27t1A6bEt6bkoRtteYrFcFZzl1N7Y+5CkKN6AnrT3Ta5RNfuiBMX8fp6eB/QBofXBnoMyfdOnT0Nh0BmJ/aKR8oL6zykaDT3tDPvtYt8KbzKqqvXBEPyXEpY2R+ddRjkxZp7cpXKad5kQa+1aXWaNtxcOQuFgXOA+GZvMlF7BEpejd3tPgtMKvQSldbf0maE1+0IRuqqwbTyezwdxklDXEnTkgS/87odpnaqZL6lLPK6GXnivtorbJoI5EHX3DGpqJXp+kSdvhLdvRpAIlYiUL7oytWo6rPcyHOCxTMCH9Lmm9dtyAfhJephi1BqfI953YRLMTpT/wDg8pgDJN92RRYPgmC69mi1x5Ta44oVwUP6SHqsNUxhCl5n8B8/hRQYfoKXiwAAAABJRU5ErkJggg==",
    name: "palm",
  },
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkklEQVR4nO3ZMWsUQRQH8AmoCFpbWGmhyAkRvLx3Xu69G4vb905QtPEjCELERhDBQhECEkSLFFaCNgpiJdgomgh2NoIoYqFgEQsVNUYNipxMTkWTJbO7d3s7kf3DwDW7b347Ozu3s8aUKVMmU5B1P7JMI+kcsnYKbaRzwDI10oj2pUWcLbzzHN+AZTzFSBTfYVwOQ7I3AUSmw4foPS8ESD8V3VH0316zSW6tzkpopoRw4vv3K7BcRZID0NDt1tr1w1G0zv0G1tPI8jn4EQGWqdHR1sZl5yCrAsktIP0eJARIn1pr13oL/K5D7QqQvggOUmvobpMy0NR6WBDSV2kRf9V7EAwEWK9khQDJRDAQJD2XHaJHA4LImf8FcjEzhGU8HAjrzawQZLkeDoRkJqNjCElehwNh7dTr0Ya0iqqVbVnrmTwgQHojLWIBUq2uRtLHIUEumIwBlmvBQJD0fg+QJ+FAeOE9+lBKwxCwHg5qjuCfFm1OqtjFurOXWiZfiBxJCoGmHAsWAqTPK5WDa3w1rLWrkOVZsBDszpUJ72iQnOy1jskdwvLFC2GZDR6CJPPeGiRvVgBE3yaAzIQPYX3oqwGsj4KGAOu7Kgv6ariNil63Zk0+EPnh/jj69rT+wVjd5N5j3LHFQ0g/AOkk0J6tSQFLQM3WFmA9j6TvBw4BkpfIOua2Qk2f4s6FrGO/zp0zhGQeWE64ldnkFOtWfdLjrlY+EPdK2pAdZkCpUXt4uddg7wncOhBz4LckT6N+p0ZRLXazO8Fa5XY17sQ8Vi8NpOcxQdLLS+eo3ja+AEl78YEjpC1TUGpNiWIurCY6uPtBJvtilWsjOZXqSnQ/yOjdfvxT7bUBy8duXxKORJkyZczi/AQGkpBUFR13ZgAAAABJRU5ErkJggg==",
    name: "user",
  },
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/klEQVR4nO2ZP4wMURzHJ8Q1KPyJgoqGLJGw897M7f7eTGLN7zfJyQYx11DROX+ChFOd8mhoqOgcDRUNJRUVIawg11HR3F1h5bLybmfuSHZm3ht7ebPil3yTyc6b334+M+9ld2Ys63/1rkolGmIejTKB97jAFgeaXYjAlvxM7pNjrDKX7dFhLugzF9TJDn5i9fCQVb6aWMEAry2CAr1xPDrL6rRzdxCslpHb8jO5LxnHBF6Vx1plKbYogT9sCE9mwUVRtJILPCXHLsmUZzp1umDBPtXjGISNRIYDHrRMVqUSDSVronsl9IoBnl64KkAfq9XqquWhVAHxaDRZE3LK6B4fT7O33R7BEctUMYH34zN6pmgPDsG5+GTc7S+dDoTAD12IsFK0h+0Hu+I11rJMFQOakRC+768p2qNWa66Nr+qMZaqS34Oy9Pn3RbjAufy/G0sAKmOL98G5QhJV/8DG/gD0S4Q6rNHYoC3iCtpbNhHbC/doizgeNVPPDNBPDnTxb0V0+zgeNbVFuKCxVAAPL/z+hYVF9PuMFRGZTGso108/RAr0mdQXAZpKazg8HGySY5jA5wzwmdyu1fZv1hXR7gM0pS0iG+dNiT/GCxwvOrVU+7BYVldkOgOiLSEARtbJM8gALy3eW+hFqw8DnC7w95raBcCWO22t2wXXHdlSAuhOr8grpyzC66FrGpinxIHAUReBMDINzNOicycpF6BxYNE7DOi8ugjgjRKLXNeYWviwxCIPdERemgbmaQF6oSPytbwi+EXjoRvOGwcWacF5paf5NjS2mYelnARbFURC3zwoZYaJwFMROVZ+ETyaK8IFXR4AkXEVkVumQXlu8GauCAN8bB6U8vIoX0Tg6/JPLXqlIvJ9AES+ZUrIl5amIbliMt8AVH3cYRqQK8au0fZUES4CNA3IFeN4GGSIhCdMA3LV1PF4xkKnK8YBhWIAJ7JE7hgHFGphgLfTRYCeDo4IPUlfI0DvB0jkXe5b2oEI0GxPCdfF9cbhNCOfGScCvwBxb0WeDuGTcAAAAABJRU5ErkJggg==",
    name: "shoppingbag",
  },
];
