import {R as A} from "./rom-7e8b4fbe.js";
var g = 1077381696,
    C = "FIADYACAA2BIAMo/BIADYDZBAIH7/wxJwCAAmQjGBAAAgfj/wCAAqAiB9/+goHSICOAIACH2/8AgAI" +
            "gCJ+jhHfAAAAAIAABgHAAAYBAAAGA2QQAh/P/AIAA4AkH7/8AgACgEICCUnOJB6P9GBAAMODCIAcAg" +
            "AKgIiASgoHTgCAALImYC6Ib0/yHx/8AgADkCHfAAAOwryz9kq8o/hIAAAEBAAACk68o/8CvLPzZBAL" +
            "H5/yCgdBARIKUrAZYaBoH2/5KhAZCZEZqYwCAAuAmR8/+goHSaiMAgAJIYAJCQ9BvJwMD0wCAAwlgA" +
            "mpvAIACiSQDAIACSGACB6v+QkPSAgPSHmUeB5f+SoQGQmRGamMAgAMgJoeX/seP/h5wXxgEAfOiHGt" +
            "7GCADAIACJCsAgALkJRgIAwCAAuQrAIACJCZHX/5qIDAnAIACSWAAd8AAAVCAAYFQwAGA2QQCR/f/A" +
            "IACICYCAJFZI/5H6/8AgAIgJgIAkVkj/HfAAAAAsIABgACAAYAAAAAg2QQAQESCl/P8h+v8MCMAgAI" +
            "JiAJH6/4H4/8AgAJJoAMAgAJgIVnn/wCAAiAJ88oAiMCAgBB3wAAAAAEA2QQAQESDl+/8Wav+B7P+R" +
            "+//AIACSaADAIACYCFZ5/x3wAAAUKABANkEAIKIggf3/4AgAHfAAAHDi+j8IIABgvAoAQMgKAEA2YQ" +
            "AQESBl9P8x+f+9Aa0Dgfr/4AgATQoMEuzqiAGSogCQiBCJARARIOX4/5Hy/6CiAcAgAIgJoIggwCAA" +
            "iQm4Aa0Dge7/4AgAoCSDHfAAAFgAyj//DwAABCAAQOgIAEA2QQCB+/8MGZJIADCcQZkokfn/ORgpOD" +
            "AwtJoiKjMwPEEMAjlIKViB9P/gCAAnGgiB8//gCAAGAwAQESAl9v8tCowaIqDFHfC4CABANoEAgev/" +
            "4AgAHAYGDAAAAGBUQwwIDBrQlREMjTkx7QKJYalRmUGJIYkR2QEsDwzMDEuB8v/gCABQRMBaM1oi5h" +
            "TNDAId8AAA////AAQgAGD0CABADAkAQAAJAEA2gQAx0f8oQxaCERARIGXm/xb6EAz4DAQnqAyIIwwS" +
            "gIA0gCSTIEB0EBEgZej/EBEgJeH/gcf/4AgAFjoKqCOB6/9AKhEW9AQnKDyBwv/gCACB6P/gCADoIw" +
            "wCDBqpYalRHI9A7hEMjcKg2AxbKUEpMSkhKREpAYHK/+AIAIG1/+AIAIYCAAAAoKQhgdv/4AgAHAoG" +
            "IAAAACcoOYGu/+AIAIHU/+AIAOgjDBIcj0DuEQyNLAwMW60CKWEpUUlBSTFJIUkRSQGBtv/gCACBov" +
            "/gCABGAQCByf/gCAAMGoYNAAAoIwwZQCIRkIkBzBSAiQGRv/+QIhCRvv/AIAAiaQAhW//AIACCYgDA" +
            "IACIAlZ4/xwKDBJAooMoQ6AiwClDKCOqIikjHfAAADaBAIGK/+AIACwGhg8AAACBr//gCABgVEMMCA" +
            "wa0JUR7QKpYalRiUGJMZkhORGJASwPDI3CoBKyoASBj//gCACBe//gCABaM1oiUETA5hS/HfAAABQK" +
            "AEA2YQBBcf9YNFAzYxajC1gUWlNQXEFGAQAQESBl5v9oRKYWBWIkAmel7hARIGXM/xZq/4Fn/+AIAB" +
            "aaBmIkAYFl/+AIAGBQdIKhAFB4wHezCM0DvQKtBgYPAM0HvQKtBlLV/xARICX0/zpVUFhBDAjGBQAA" +
            "AADCoQCJARARIKXy/4gBctcBG4iAgHRwpoBwsoBXOOFww8AQESDl8P+BTv/gCACGBQCoFM0DvQKB1P" +
            "/gCACgoHSMSiKgxCJkBSgUOiIpFCg0MCLAKTQd8ABcBwBANkEAgf7/4AgAggoYDAmCyPwMEoApkx3w" +
            "NkEAgfj/4AgAggoYDAmCyP0MEoApkx3wvP/OP0QAyj9MAMo/QCYAQDQmAEDQJgBANmEAfMitAoeTLT" +
            "H3/8YFAACoAwwcvQGB9//gCACBj/6iAQCICOAIAKgDgfP/4AgA5hrdxgoAAABmAyYMA80BDCsyYQCB" +
            "7v/gCACYAYHo/zeZDagIZhoIMeb/wCAAokMAmQgd8EAAyj8AAMo/KCYAQDZBACH8/4Hc/8gCqAix+v" +
            "+B+//gCAAMCIkCHfCQBgBANkEAEBEgpfP/jLqB8v+ICIxIEBEgpfz/EBEg5fD/FioAoqAEgfb/4AgA" +
            "HfBIBgBANkEAEBEgpfD/vBqR5v+ICRuoqQmR5f8MCoqZIkkAgsjBDBmAqYOggHTMiqKvQKoiIJiTnN" +
            "kQESBl9/9GBQCtAoHv/+AIABARIOXq/4xKEBEg5ff/HfAAADZBAKKgwBARIOX5/x3wAAA2QQCCoMCt" +
            "AoeSEaKg2xARIGX4/6Kg3EYEAAAAAIKg24eSCBARICX3/6Kg3RARIKX2/x3wNkEAOjLGAgAAogIAGy" +
            "IQESCl+/83kvEd8AAAAFwcAEAgCgBAaBwAQHQcAEA2ISGi0RCB+v/gCABGEAAAAAwUQEQRgcb+4AgA" +
            "QENjzQS9AYyqrQIQESCltf8GAgAArQKB8P/gCACgoHT8Ws0EELEgotEQgez/4AgASiJAM8BWw/siog" +
            "sQIrAgoiCy0RCB5//gCACtAhwLEBEgZfb/LQOGAAAioGMd8AAAiCYAQIQbAECUJgBAkBsAQDZBABAR" +
            "IGXb/6yKDBNBcf/wMwGMsqgEgfb/4AgArQPGCQCtA4H0/+AIAKgEgfP/4AgABgkAEBEgpdb/DBjwiA" +
            "EsA6CDg60IFpIAgez/4AgAhgEAAIHo/+AIAB3wYAYAQDZBIWKkHeBmERpmWQYMF1KgAGLREFClIEB3" +
            "EVJmGhARIOX3/0e3AsZCAK0Ggbb/4AgAxi8AUHPAgYP+4AgAQHdjzQe9AYy6IKIgEBEgpaT/BgIAAK" +
            "0Cgaz/4AgAoKB0jJoMCIJmFn0IBhIAABARIGXj/70HrQEQESDl5v8QESBl4v/NBxCxIGCmIIGg/+AI" +
            "AHoielU3tcmSoQfAmRGCpB0ameCIEZgJGoiICJB1wIc3gwbr/wwJkkZsoqQbEKqggc//4AgAVgr/sq" +
            "ILogZsELuwEBEg5acA9+oS9kcPkqINEJmwepmiSQAbd4bx/3zpl5rBZkcSgqEHkiYawIgRGoiZCDe5" +
            "Ape1iyKiCxAisL0GrQKBf//gCAAQESCl2P+tAhwLEBEgJdz/EBEgpdf/DBoQESDl5v8d8AAAyj9PSE" +
            "FJsIAAYKE62FCYgABguIAAYCoxHY+0gABg9CvLP6yAN0CYIAxg7IE3QKyFN0AIAAhggCEMYBCAN0AQ" +
            "gANgUIA3QAwAAGA4QABglCzLP///AAAsgQBgjIAAABBAAAD4K8s/CCzLP1AAyj9UAMo/VCzLPxQAAG" +
            "Dw//8A9CvLP2Qryj9wAMo/gAcAQHgbAEC4JgBAZCYAQHQfAEDsCgBAVAkAQFAKAEAABgBAHCkAQCQn" +
            "AEAIKABA5AYAQHSBBECcCQBA/AkAQAgKAECoBgBAhAkAQGwJAECQCQBAKAgAQNgGAEA24QAhxv8MCi" +
            "nBgeb/4AgAEBEgJbH/FpoEMcH/IcL/QcL/wCAAKQMMAsAgACkEwCAAKQNRvv8xvv9hvv/AIAA5BcAg" +
            "ADgGfPQQRAFAMyDAIAA5BsAgACkFxgEAAEkCSyIGAgAhrf8xtP9CoAA3MuwQESAlwf8MS6LBMBARIK" +
            "XE/yKhARARIOW//0Fz/ZAiESokwCAASQIxqf8hS/05AhARIKWp/y0KFvoFIar+wav+qAIMK4Gt/uAI" +
            "ADGh/7Gi/xwaDAzAIACpA4G4/+AIAAwa8KoBgSr/4AgAsZv/qAIMFYGz/+AIAKgCgSL/4AgAqAKBsP" +
            "/gCAAxlf/AIAAoA1AiIMAgACkDhhgAEBEgZaH/vBoxj/8cGrGP/8AgAKJjACDCIIGh/+AIADGM/wxF" +
            "wCAAKAMMGlAiIMAgACkD8KoBxggAAACxhv/NCgxagZf/4AgAMYP/UqEBwCAAKAMsClAiIMAgACkDgQ" +
            "X/4AgAgZL/4AgAIXz/wCAAKALMuhzDMCIQIsL4DBMgo4MMC4GL/+AIAIGk/eAIAIzaoXP/gYj/4AgA" +
            "gaH94AgA8XH/DB0MHAwb4qEAQN0RAMwRYLsBDAqBgP/gCAAha/8qRCGU/WLSK4YXAAAAUWH+wCAAMg" +
            "UAMDB0FtMEDBrwqgHAIAAiRQCB4f7gCACionHAqhGBcv/gCACBcf/gCABxWv986MAgADgHfPqAMxAQ" +
            "qgHAIAA5B4Fr/+AIAIFr/+AIAK0CgWr/4AgAwCAAKAQWovkMB8AgADgEDBLAIAB5BCJBJCIDAQwoea" +
            "EiQSWCURMcN3cSJBxHdxIhZpIhIgMDcgMCgCIRcCIgZkISKCPAIAAoAimhhgEAAAAcIiJRExARIKWf" +
            "/7KgCKLBJBARICWj/7IDAyIDAoC7ESBbICE0/yAg9FeyGqKgwBARIOWd/6Kg7hARIGWd/xARICWc/w" +
            "ba/yIDARxHJzc39iIbxvgAACLCLyAgdLZCAgYlAHEm/3AioCgCoAIAACLC/iAgdBwnJ7cCBu8AcSD/" +
            "cCKgKAKgAgBywjBwcHS2V8VG6QAsSQwHIqDAlxUCRucAeaEMcq0HEBEgpZb/rQcQESAllv8QESCllP" +
            "8QESBllP8Mi6LBJCLC/xARIKWX/1Yi/UZEAAwSVqU1wsEQvQWtBYEd/+AIAFaqNBxLosEQEBEgZZX/" +
            "hrAADBJWdTOBF//gCACgJYPGygAmhQQMEsbIAHgjKDMghyCAgLRW2P4QESClQv8qd6zaBvj/AIEd/e" +
            "AIAFBcQZwKrQWBRf3gCACGAwAAItLwRgMArQWBBf/gCAAW6v4G7f8gV8DMEsaWAFCQ9FZp/IYLAIEO" +
            "/eAIAFBQ9ZxKrQWBNf3gCACGBAAAfPgAiBGKIkYDAK0Fgfb+4AgAFqr+Bt3/DBkAmREgV8AnOcVGCw" +
            "AAAACB/vzgCABQXEGcCq0FgSb94AgAhgMAACLS8EYDAK0Fgeb+4AgAFur+Bs7/IFfAVuL8hncADAci" +
            "oMAmhQLGlQAMBy0HBpQAJrX1BmoADBImtQIGjgC4M6gjDAcQESDlhv+gJ4OGiQAMGWa1X4hDIKkRDA" +
            "cioMKHugLGhgC4U6gjkmEREBEg5Tf/kiERoJeDRg4ADBlmtTSIQyCpEQwHIqDCh7oCBnwAKDO4U6gj" +
            "IHiCkmEREBEg5TT/Ic78DAiSIRGJYiLSK3JiAqCYgy0JBm8AAJHI/AwHogkAIqDGd5oCBm0AeCOyxf" +
            "AioMC3lwEoWQwHkqDvRgIAeoOCCBgbd4CZMLcn8oIDBXIDBICIEXCIIHIDBgB3EYB3IIIDB4CIAXCI" +
            "IICZwIKgwQwHkCiThlkAgbD8IqDGkggAfQkWiRWYOAwHIqDIdxkCxlIAKFiSSABGTgAciQwHDBKXFQ" +
            "LGTQD4c+hj2FPIQ7gzqCOBi/7gCAAMCH0KoCiDxkYAAAAMEiZFAsZBAKgjDAuBgf7gCAAGIAAAUJA0" +
            "DAcioMB3GQJGPQBQVEGLw3z4Rg8AqDyCYRKSYRHCYRCBef7gCADCIRCCIRIoLHgcqAySIRFwchAmAg" +
            "3AIADYCiAoMNAiECB3IMAgAHkKG5nCzBBXOb7Gk/9mRQJGkv8MByKgwEYmAAwSJrUCxiEAIVX+iFN4" +
            "I4kCIVT+eQIMAgYdAKFQ/gwH6AoMGbLF8I0HLQewKZPgiYMgiBAioMZ3mF/BSv59CNgMIqDJtz1SsP" +
            "AUIqDAVp8ELQiGAgAAKoOIaEsiiQeNCSp+IP3AtzLtFmjd+Qx5CsZz/wAMEmaFFyE6/ogCjBiCoMgM" +
            "B3kCITb+eQIMEoAngwwHBgEADAcioP8goHQQESDlXP9woHQQESBlXP8QESDlWv9WYrUiAwEcJyc3IP" +
            "YyAgbS/iLC/SAgdAz3J7cChs7+cSX+cCKgKAKgAgAAAHKg0ncSX3Kg1HeSAgYhAMbG/igzOCMQESDl" +
            "Qf+NClbKsKKiccCqEYJhEoEl/uAIAHEX/pEX/sAgAHgHgiEScLQ1wHcRkHcQcLsgILuCrQgwu8KBJP" +
            "7gCACio+iBGf7gCABGsv4AANhTyEO4M6gjEBEgpWb/hq3+ALIDAyIDAoC7ESC7ILLL8KLDGBARICUs" +
            "/4am/gAiAwNyAwKAIhFwIiCBEv7gCABxHPwiwvCIN4AiYxaSp4gXioKAjEFGAwAAAIJhEhARIKUQ/4" +
            "IhEpInBKYZBZInApeo5xARIKX2/hZq/6gXzQKywxiBAf7gCACMOjKgxDlXOBcqMzkXODcgI8ApN4H7" +
            "/eAIAIaI/gAAcgMCIsMYMgMDDBmAMxFwMyAyw/AGIwBx3P2Bi/uYBzmxkIjAiUGIJgwZh7MBDDmSYR" +
            "EQESDlCP+SIRGB1P2ZAegHodP93QggsiDCwSzywRCCYRKB5f3gCAC4Jp0KqLGCIRKgu8C5JqAzwLgH" +
            "qiKoQQwMqrsMGrkHkMqDgLvAwNB0VowAwtuAwK2TFmoBrQiCYRKSYREQESClGv+CIRKSIRGCZwBR2f" +
            "t4NYyjkI8xkIjA1igAVvf11qkAMdT7IqDHKVNGAACMOYz3BlX+FheVUc/7IqDIKVWGUf4xzPsioMkp" +
            "U8ZO/igjVmKTEBEg5S//oqJxwKoRga/94AgAgbv94AgAxkb+KDMWYpEQESDlLf+io+iBqP3gCADgAg" +
            "BGQP4d8AAANkEAnQKCoMAoA4eZD8wyDBKGBwAMAikDfOKGDwAmEgcmIhiGAwAAAIKg24ApI4eZKgwi" +
            "KQN88kYIAAAAIqDcJ5kKDBIpAy0IBgQAAACCoN188oeZBgwSKQMioNsd8AAA",
    I = 1077379072,
    B = "ZCvKP8qNN0CvjjdAcJM3QDqPN0DPjjdAOo83QJmPN0BmkDdA2ZA3QIGQN0BVjTdA/I83QFiQN0C8jz" +
            "dA+5A3QOaPN0D7kDdAnY43QPqON0A6jzdAmY83QLWON0CWjTdAvJE3QDaTN0ByjDdAVpM3QHKMN0By" +
            "jDdAcow3QHKMN0ByjDdAcow3QHKMN0ByjDdAVpE3QHKMN0BRkjdANpM3QAQInwAAAAAAAAAYAQQIBQ" +
            "AAAAAAAAAIAQQIBgAAAAAAAAAAAQQIIQAAAAAAIAAAEQQI3AAAAAAAIAAAEQQIDAAAAAAAIAAAAQQI" +
            "EgAAAAAAIAAAESAoDAAQAQAA",
    E = 1070279668;
class Q extends A {
    constructor() {
        super(...arguments),
        this.CHIP_NAME = "ESP32-S3",
        this.IMAGE_CHIP_ID = 9,
        this.EFUSE_BASE = 1610641408,
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 68,
        this.UART_CLKDIV_REG = 1610612756,
        this.UART_CLKDIV_MASK = 1048575,
        this.UART_DATE_REG_ADDR = 1610612864,
        this.FLASH_WRITE_SIZE = 1024,
        this.BOOTLOADER_FLASH_OFFSET = 0,
        this.FLASH_SIZES = {
            "1MB": 0,
            "2MB": 16,
            "4MB": 32,
            "8MB": 48,
            "16MB": 64
        },
        this.SPI_REG_BASE = 1610620928,
        this.SPI_USR_OFFS = 24,
        this.SPI_USR1_OFFS = 28,
        this.SPI_USR2_OFFS = 32,
        this.SPI_MOSI_DLEN_OFFS = 36,
        this.SPI_MISO_DLEN_OFFS = 40,
        this.SPI_W0_OFFS = 88,
        this.USB_RAM_BLOCK = 2048,
        this.UARTDEV_BUF_NO_USB = 3,
        this.UARTDEV_BUF_NO = 1070526796,
        this.TEXT_START = I,
        this.ENTRY = g,
        this.DATA_START = E,
        this.ROM_DATA = B,
        this.ROM_TEXT = C
    }
    async get_chip_description(A) {
        return "ESP32-S3"
    }
    async get_chip_features(A) {
        return ["Wi-Fi", "BLE"]
    }
    async get_crystal_freq(A) {
        return 40
    }
    _d2h(A) {
        const g = (+A).toString(16);
        return 1 === g.length
            ? "0" + g
            : g
    }
    async _post_connect(A) {
        const g = 255 & await A.read_reg(this.UARTDEV_BUF_NO);
        A.debug("In _post_connect " + g),
        g == this.UARTDEV_BUF_NO_USB && (A.ESP_RAM_BLOCK = this.USB_RAM_BLOCK)
    }
    async read_mac(A) {
        let g = await A.read_reg(this.MAC_EFUSE_REG);
        g >>>= 0;
        let C = await A.read_reg(this.MAC_EFUSE_REG + 4);
        C = C >>> 0 & 65535;
        const I = new Uint8Array(6);
        return I[0] = C >> 8 & 255,
        I[1] = 255 & C,
        I[2] = g >> 24 & 255,
        I[3] = g >> 16 & 255,
        I[4] = g >> 8 & 255,
        I[5] = 255 & g,
        this._d2h(I[0]) + ":" + this._d2h(I[1]) + ":" + this._d2h(I[2]) + ":" + this._d2h(
            I[3]
        ) + ":" + this._d2h(I[4]) + ":" + this._d2h(I[5])
    }
    get_erase_size(A, g) {
        return g
    }
}
export {
    Q as ESP32S3ROM
};
