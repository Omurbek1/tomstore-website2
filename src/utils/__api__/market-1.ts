import axios from "@lib/axios";
import Brand from "@models/Brand.model";
import Category from "@models/category.model";
import MainCarouselItem from "@models/market-1.model";
import Product from "../../models/product.model";
import Service from "@models/service.model";
import Shop from "../../models/shop.model";

const requestMarket1 = async <T>(path: string): Promise<T> => {
  const response = await axios.get<T>(path);
  return response.data;
};

const getTopRatedProduct = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/toprated-product");

const getTopRatedBrand = async (): Promise<Brand[]> =>
  requestMarket1("/api/market-1/toprated-brand");

const getNewArrivalList = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/new-arrivals");

const getCarBrands = async (): Promise<Brand[]> =>
  requestMarket1("/api/market-1/car-brand-list");

const getCarList = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/car-list");

const getMobileBrands = async (): Promise<Brand[]> =>
  requestMarket1("/api/market-1/mobile-brand-list");

const getMobileShops = async (): Promise<Shop[]> =>
  requestMarket1("/api/market-1/mobile-shop-list");

const getMobileList = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/mobile-list");

const getOpticsBrands = async (): Promise<Brand[]> =>
  requestMarket1("/api/market-1/optics/watch-brands");

const getOpticsShops = async (): Promise<Shop[]> =>
  requestMarket1("/api/market-1/optics/watch-shops");

const getOpticsList = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/optics-list");

const getCategories = async (): Promise<Category[]> =>
  requestMarket1("/api/market-1/bottom-categories");

const getMoreItems = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/get-more-items");

const getServiceList = async (): Promise<Service[]> =>
  requestMarket1("/api/market-1/get-service-list");

const getMainCarousel = async (): Promise<MainCarouselItem[]> =>
  requestMarket1("/api/market-1/main-carousel");

const getFlashDeals = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/flash-deals");

const getTopCategories = async (): Promise<Category[]> =>
  requestMarket1("/api/market-1/top-categories");

const getBigDiscountList = async (): Promise<Product[]> =>
  requestMarket1("/api/market-1/big-discounts");

export default {
  getCarList,
  getCarBrands,
  getMoreItems,
  getFlashDeals,
  getMobileList,
  getCategories,
  getOpticsList,
  getServiceList,
  getMobileShops,
  getOpticsShops,
  getMainCarousel,
  getMobileBrands,
  getOpticsBrands,
  getTopCategories,
  getTopRatedBrand,
  getNewArrivalList,
  getBigDiscountList,
  getTopRatedProduct,
};
